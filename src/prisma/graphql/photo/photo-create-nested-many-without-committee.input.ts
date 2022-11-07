import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutCommitteeInput } from './photo-create-without-committee.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutCommitteeInput } from './photo-create-or-connect-without-committee.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoCreateNestedManyWithoutCommitteeInput {

    @Field(() => [PhotoCreateWithoutCommitteeInput], {nullable:true})
    @Type(() => PhotoCreateWithoutCommitteeInput)
    create?: Array<PhotoCreateWithoutCommitteeInput>;

    @Field(() => [PhotoCreateOrConnectWithoutCommitteeInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutCommitteeInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutCommitteeInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;
}
