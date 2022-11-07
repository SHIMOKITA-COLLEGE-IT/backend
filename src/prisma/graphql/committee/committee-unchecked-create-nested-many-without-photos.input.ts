import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommitteeCreateWithoutPhotosInput } from './committee-create-without-photos.input';
import { Type } from 'class-transformer';
import { CommitteeCreateOrConnectWithoutPhotosInput } from './committee-create-or-connect-without-photos.input';
import { CommitteeWhereUniqueInput } from './committee-where-unique.input';

@InputType()
export class CommitteeUncheckedCreateNestedManyWithoutPhotosInput {

    @Field(() => [CommitteeCreateWithoutPhotosInput], {nullable:true})
    @Type(() => CommitteeCreateWithoutPhotosInput)
    create?: Array<CommitteeCreateWithoutPhotosInput>;

    @Field(() => [CommitteeCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => CommitteeCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<CommitteeCreateOrConnectWithoutPhotosInput>;

    @Field(() => [CommitteeWhereUniqueInput], {nullable:true})
    @Type(() => CommitteeWhereUniqueInput)
    connect?: Array<CommitteeWhereUniqueInput>;
}
