import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutCommitteeInput } from './photo-create-without-committee.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutCommitteeInput } from './photo-create-or-connect-without-committee.input';
import { PhotoUpsertWithWhereUniqueWithoutCommitteeInput } from './photo-upsert-with-where-unique-without-committee.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { PhotoUpdateWithWhereUniqueWithoutCommitteeInput } from './photo-update-with-where-unique-without-committee.input';
import { PhotoUpdateManyWithWhereWithoutCommitteeInput } from './photo-update-many-with-where-without-committee.input';
import { PhotoScalarWhereInput } from './photo-scalar-where.input';

@InputType()
export class PhotoUncheckedUpdateManyWithoutCommitteeNestedInput {

    @Field(() => [PhotoCreateWithoutCommitteeInput], {nullable:true})
    @Type(() => PhotoCreateWithoutCommitteeInput)
    create?: Array<PhotoCreateWithoutCommitteeInput>;

    @Field(() => [PhotoCreateOrConnectWithoutCommitteeInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutCommitteeInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutCommitteeInput>;

    @Field(() => [PhotoUpsertWithWhereUniqueWithoutCommitteeInput], {nullable:true})
    @Type(() => PhotoUpsertWithWhereUniqueWithoutCommitteeInput)
    upsert?: Array<PhotoUpsertWithWhereUniqueWithoutCommitteeInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    set?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    disconnect?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    delete?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;

    @Field(() => [PhotoUpdateWithWhereUniqueWithoutCommitteeInput], {nullable:true})
    @Type(() => PhotoUpdateWithWhereUniqueWithoutCommitteeInput)
    update?: Array<PhotoUpdateWithWhereUniqueWithoutCommitteeInput>;

    @Field(() => [PhotoUpdateManyWithWhereWithoutCommitteeInput], {nullable:true})
    @Type(() => PhotoUpdateManyWithWhereWithoutCommitteeInput)
    updateMany?: Array<PhotoUpdateManyWithWhereWithoutCommitteeInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    @Type(() => PhotoScalarWhereInput)
    deleteMany?: Array<PhotoScalarWhereInput>;
}
